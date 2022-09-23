import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/1.png" width={200} height={200}/>
      
      </div>
        
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninja List</a></Link>
        
      
    </nav>
  );
};

export default Navbar;

