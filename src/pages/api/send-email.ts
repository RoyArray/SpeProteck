import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const nombre = data.get('nombre');
        const email = data.get('email');
        const telefono = data.get('telefono');
        const servicio = data.get('servicio');
        const inmueble = data.get('inmueble');
        const motivo = data.get('motivo');
        const tiene_alarma = data.get('tiene_alarma');
        const ubicacion = data.get('ubicacion');
        const robos = data.get('robos');
        const provincia = data.get('provincia');
        const mensaje = data.get('mensaje');

        if (!nombre || !email || !servicio || !inmueble || !provincia) {
            return new Response(
                JSON.stringify({
                    message: 'Faltan campos obligatorios.',
                }),
                { status: 400 }
            );
        }

        const recipient = import.meta.env.PUBLIC_RECIPIENT_EMAIL || 'royandres2015@gmail.com';

        const { data: resData, error } = await resend.emails.send({
            from: 'Proteck Contact <onboarding@resend.dev>',
            to: [recipient],
            subject: `Nueva Solicitud de Contacto - ${servicio}`,
            html: `
        <h1>Nueva solicitud de contacto</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
        <hr />
        <p><strong>Servicio de Interés:</strong> ${servicio}</p>
        <p><strong>Inmueble a proteger:</strong> ${inmueble}</p>
        <p><strong>Motivo:</strong> ${motivo || 'No indicado'}</p>
        <p><strong>¿Tiene alarma?:</strong> ${tiene_alarma || 'No indicado'}</p>
        <p><strong>Ubicación:</strong> ${ubicacion || 'No indicado'}</p>
        <p><strong>¿Han robado?:</strong> ${robos || 'No indicado'}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje || 'Sin mensaje adicional'}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return new Response(
                JSON.stringify({
                    message: 'Error al enviar el correo.',
                    error: error.message
                }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({
                message: '¡Mensaje enviado con éxito!',
                id: resData?.id
            }),
            { status: 200 }
        );
    } catch (error: any) {
        console.error('API Error:', error);
        return new Response(
            JSON.stringify({
                message: 'Error interno del servidor.',
                error: error.message
            }),
            { status: 500 }
        );
    }
};
