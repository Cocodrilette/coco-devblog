import * as React from "react"
import { Link } from "gatsby"
import {
  mainContainer404,
  h1NotFound,
  paraNotFound,
  mainContent
} from '../../styles/404.module.css'

// markup
const NotFoundPage = () => {
  return (
    <main className={mainContainer404}>
      <div className={mainContent}>
      <title>Not found</title>
      <h1 className={h1NotFound}>Page not found</h1>
      <p className={paraNotFound}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        that you were looking for doesn't exist.
        <br />
        Maybe you should go {" "}
        <br />
        {/* {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className={codeNotFound}>src/pages/</code>.
            <br />
          </>
        ) : null} */}
        <br />
        <Link to="/">Back To Home</Link>
      </p>
      </div>
    </main>
  )
}

export default NotFoundPage
