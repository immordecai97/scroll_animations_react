import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const AnimatedSection = ({
	children,
	animation = 'fadeIn',
	delay = 0,
	className = '',
	...props
}) => {
	const [ref, isVisible] = useIntersectionObserver();
	const animationClasses = {
    fadeIn: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
    slideLeft: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`,
    slideRight: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
    zoom: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
    bounce: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`
  };

	return (
		<div
			ref={ref}
			className={`${animationClasses[animation]} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
			{...props}
		>
			{children}
		</div>
	);
};



