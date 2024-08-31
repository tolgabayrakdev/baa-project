import { Helmet } from "react-helmet-async"

type Props = {}

export default function Index({ }: Props) {
  return (
    <div>
      <Helmet>
        <title>
          Baa - Board Page
        </title>
      </Helmet>
    </div>
  )
}