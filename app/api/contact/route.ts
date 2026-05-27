import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    const data = await resend.emails.send({
      from: "Wizjonair <hello@wizjonair.pl>",
      to: ["marcin.wozniak@gmail.com"],
      subject: `[Wizjonair] Nowe zapytanie od ${name}`,
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
    return Response.json(
      { error: "Błąd wysyłki wiadomości" },
      { status: 500 }
    )
  }
}
