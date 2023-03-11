import { buildLegacyTheme } from "sanity";

const props = {
    "--white": "#fff",
    "--black": "#1e1e1e",
    "--primary": "#1e1e1e",
    "--secondary": "#f1ff5a",
    "--warning": "#f4b400",
    "--danger": "#db4437"
}

export const myTheme = buildLegacyTheme({
    "--black": props["--black"],
    "--white": props["--white"],
    "--brand-primary": props["--primary"],
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--primary"],
    "--state-info-color": props["--primary"],
    "--state-success-color": props["--secondary"],
    "--state-warning-color": props["--warning"],
    "--state-danger-color": props["--danger"],
    "--focus-color": props["--primary"],
    "--main-navigation-color": props["--black"],
    "--main-navigation-color--inverted": props["--white"],
})