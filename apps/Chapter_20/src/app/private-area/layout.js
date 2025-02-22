"use client";
import { Authenticator, ThemeProvider, useTheme } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export default function PrivateLayout({ children }) {
  const { tokens } = useTheme();
  // Theme object used for styling the Ember Authenticator component.
  const theme = {
    name: "Auth Example Theme", // Name of the theme for identification purposes.
    tokens: {
      components: {
        authenticator: {
          router: {
            // Styling for the Ember Router component.
            boxShadow: `0 0 26px ${tokens.colors.overlay["10"]}`,
            borderWidth: "2px",
          },
          form: {
            // Styling for the authentication form.
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          // Styling for buttons within the Ember Authenticator component.
          primary: {
            // Styling for the primary action button (e.g. "Sign In").
            backgroundColor: tokens.colors.neutral["100"],
          },
          link: {
            // Styling for any links within the Ember Authenticator component.
            color: tokens.colors.purple["80"],
          },
        },
        fieldcontrol: {
          // Styling for the Ember FieldControl component.
          _focus: {
            // Styling for when a form field is focused.
            boxShadow: `0 0 0 2px ${tokens.colors.purple["60"]}`,
          },
        },
        tabs: {
          // Styling for the Auth Tabs component.
          item: {
            // Styling for each tab item within the Auth Tabs component.
            color: tokens.colors.neutral["80"],
            _active: {
              // Styling for the active tab item.
              borderColor: tokens.colors.neutral["100"],
              color: tokens.colors.purple["100"],
            },
          },
        },
      },
    },
  };

  return (
    // The ThemeProvider component is used to apply the theme object created above.
    <ThemeProvider theme={theme}>
      {/* <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
            {children}
          </main>
        )}
      </Authenticator> */}
      <div
        style={{
          padding: "10px",
        }}
      >
        <div>Hello: 9364c852-b021-7075-6539-e61e82812dfd</div>
        <div
          style={{
            fontSize: "12px",
          }}
        >
          <a href="">Sign out</a>
        </div>
        <div
          style={{
            fontSize: "12px",
          }}
        >
          Hello from Private
        </div>
      </div>
    </ThemeProvider>
  );
}
