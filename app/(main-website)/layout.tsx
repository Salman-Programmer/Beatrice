import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-360 mx-auto" >
      <Navbar/>
      <main>{children}</main>
       <Footer/>
    </div>
  )
}