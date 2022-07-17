import * as React from "react"
import { Link } from "gatsby"
import {
  mainContainer404,
  h1NotFound,
  paraNotFound,
  codeNotFound
} from '../../styles/404.module.css'

// markup
const NotFoundPage = () => {
  return (
    <main style={mainContainer404}>
      <title>Not found</title>
      <h1 style={h1NotFound}>Page not found</h1>
      <p style={paraNotFound}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className={codeNotFound}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
