import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()

    const { name, email, message } = body

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["hello@wizjonair.pl"],
      subject: `Nowe zapytanie od ${name}`,
      replyTo: email,
      html: `
        <h2>Nowa wiadomość z formularza</h2>

        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json(data)
  } catch (error) {
    console.error(error)

    return Response.json(
      { error: "Błąd wysyłki wiadomości" },
      { status: 500 }
    )
  }
}
