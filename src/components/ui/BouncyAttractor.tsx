import { useEffect, useRef } from "react"
import { lerp } from "../../lib/Utilities";
import type { ClassNameValue } from "tailwind-merge";
import type { vector2 } from "../../lib/Utilities";

interface BouncyAttractorProps{
    maxRadius?: number;
    frequency? : number;
    damping? : number;
    text? : string;
    customStyle? : ClassNameValue
}


function BouncyAttractor({ maxRadius = 50, frequency = 0.2, damping = 0.2, text = "", customStyle = "" }: BouncyAttractorProps) {
    const bouncyAttractorRef = useRef<HTMLDivElement>(null);
    let isHovered = false;

    
    useEffect(() => {
        const bouncyAttractor = bouncyAttractorRef.current as HTMLDivElement;
        if (!bouncyAttractor){
            console.error("NO BOUNCY ATTRACTOR FOUND!!!");
            return;
        }
        
        let offset : vector2 = {
            x : 0,
            y : 0
        }
        let target : vector2 = {
            x : 0,
            y : 0
        }
        let center : vector2 = {
            x : 0,
            y : 0
        }
        let amplitude : vector2 = {
            x : 0,
            y : 0
        }
        let angle = 0;
        let rect : DOMRect;
        function normalizeVector(vec : vector2) : vector2{
            const magnitude = Math.sqrt(vec.x**2 + vec.y**2);
            const unitVector : vector2 = {x: vec.x/magnitude, y: vec.y/magnitude};
            return unitVector;
        }

        const handleMouseOver = (e: MouseEvent) =>{
            rect = bouncyAttractor.getBoundingClientRect();
            isHovered = true;
            center = {x: rect.left + rect.width/2, y: rect.top + rect.height/2}
            
            target = {x: e.clientX-center.x, y: e.clientY-center.y};
            amplitude.x = (target.x);
            amplitude.y = (target.y);
            angle = Math.PI/2;

            
        }



        const handleMouseMove = (e: MouseEvent) => {
            target = {x: e.clientX-center.x, y: e.clientY-center.y};
            const offsetDir = normalizeVector(target);
            target.x = Math.min(offsetDir.x * maxRadius, Math.max(offsetDir.x * -maxRadius, target.x));
            target.y = Math.min(offsetDir.y * maxRadius, Math.max(offsetDir.y * -maxRadius, target.y));
        }
        
        const handleMouseOut = () => {
            isHovered = false;
            amplitude.x = -(target.x) *2;
            amplitude.y = -(target.y) *2;
            angle = Math.PI/2;
            target.x = 0;
            target.y = 0;

            
        }
        
        function UpdatePosition(){
            
            offset.x = lerp(offset.x, target.x + Math.sin(angle)*amplitude.x, 5);
            offset.y = lerp(offset.y, target.y + Math.sin(angle)*amplitude.y, 5);
            

            angle += frequency;
            amplitude.x = lerp(amplitude.x, 0, 1/damping);
            amplitude.y = lerp(amplitude.y, 0, 1/damping);
            
            // offset.y = target.y + Math.sin(Date.now()/60) * maxRadius;
            
            bouncyAttractor.style.transform = "translate("+ (offset.x)+"px, " + (offset.y)+"px)";

            requestAnimationFrame(UpdatePosition);
        }
        UpdatePosition();


        bouncyAttractor.addEventListener('mousemove', handleMouseMove);
        bouncyAttractor.addEventListener('mouseover', handleMouseOver);
        bouncyAttractor.addEventListener('mouseout', handleMouseOut)

        return () => {
            bouncyAttractor.removeEventListener('mousemove', handleMouseMove);
            bouncyAttractor.removeEventListener('mouseover', handleMouseOver);
            bouncyAttractor.removeEventListener('mouseout', handleMouseOut);
        }
    }, [])




    return (
        <div ref={bouncyAttractorRef} className={"cursor-pointer inline-flex justify-center items-center relative z-10 w-30 h-35 rounded-full bg-stone-100 text-[#141414] font-semibold" + customStyle}>{text}</div>
    )
}

export default BouncyAttractor;