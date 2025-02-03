import PageTranstion from '../PageTransition/PageTransition'
import { Header } from '../navigation/Navigation'
export function Profile() {
    return(
        <>
        <PageTranstion>
            <Header/>
            <h1>Profile</h1>
        </PageTranstion>
        </>
    )
}