import React from 'react'

/** Class to handle the login. */
export default class Login extends React.Component<{}, {}> {
  /**
   * Render the login page.
   * @returns The rendered login page.
   */
  public render() {
    return (
      <div>
        <h1>Login</h1>
        <p>
          <a href="/auth/google">Login with Google</a>
        </p>
      </div>
    )
  }
}

