import { Layout } from "./Layout"
import { useProps } from "./useProps";


export const Header = () => {
    return <Layout {...useProps()}/>;
}