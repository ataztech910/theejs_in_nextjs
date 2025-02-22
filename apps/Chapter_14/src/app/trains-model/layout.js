import { Suspense } from "react";
import Loading from "./@firstapp/loading";

export default function TrainsLayout({
  children,
  firstapp
}) {
  return (
	<div className="flex">
    	<div>
        	<Suspense fallback={<Loading />}>{firstapp}</Suspense>
    	</div>
    	<div>
        	{children}
    	</div>
	</div>
  );
}
