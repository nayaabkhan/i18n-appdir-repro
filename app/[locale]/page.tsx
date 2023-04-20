export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return (
    <div>
      <p>Current locale: {locale}</p>
      <p>This text is rendered on the server.</p>
    </div>
  )
}
