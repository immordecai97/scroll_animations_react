import { useEffect, useRef, useState } from "react";

// Creamos un observer GLOBAL para toda la app.
let globalObserver = null;
const observedElements = new Map();

export const useIntersectionObserver = (options = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		// Crear el observer global si no existe
		if (!globalObserver) {
			globalObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					// Busca la función setState para actualizar el estado
					const setState = observedElements.get(entry.target);
					console.log('setState raro:', setState);
					if (setState) setState(entry.isIntersecting);
				});
			}, {
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px', // -50px para que se active antes de que el elemento llegue al final de la pantalla de la parte de abajo.
				...options
			});
		}

		// Registrar el elemento en el observer global.
		if (ref.current) {
			observedElements.set(ref.current, setIsIntersecting);
			globalObserver.observe(ref.current);
		}

		// Limpiar el observer global al desmontar el componente. (Cleanup)
		return () => {
			if (ref.current) {
				observedElements.delete(ref.current);
				globalObserver.unobserve(ref.current);
			}
		};
	}, [options]);

	return [ref, isIntersecting];
};