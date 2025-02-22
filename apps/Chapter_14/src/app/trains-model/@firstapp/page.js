import Link from "next/link";

export default async function Page() {
// This code will emulate loading 
	await new Promise(resolve => setTimeout(resolve, 8000)); 
	
return (
  	<div className="p-24 bg-slate-400">
   		Gray app Internal<br />
		<Link href="/modal/123">open modal</Link><br />
      	<Link href="/trains-model/internal-folder">open internal</Link>
  	</div>
	);
}