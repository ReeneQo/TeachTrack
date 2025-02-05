import PageTranstion from '../PageTransition/PageTransition'
import { Header } from '../navigation/Navigation'
export function About() {
    return(
        <>
        <PageTranstion>
            <Header/>
            <h1>О нас</h1>
        </PageTranstion>
        </>
    )
}