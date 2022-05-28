import { useEffect } from 'react'

const useObserver = (sections, links) => {

    useEffect(() => {
        const sectionsRef = sections.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const link = links.current[parseInt(entry.target.id.substring(1))].current;
                if (!link) return;

                if (!entry.isIntersecting) return link.removeAttribute("style");

                link.style.setProperty('--randomColor', `#${Math.floor(Math.random() * 16777215).toString(16)}`);
                link.style.fontWeight = "bold";
            })
        }, {
            threshold: 0.51,
            root: null,
            rootMargin: '0px'
        });
        sectionsRef.forEach(section => {
            if (section.current) observer.observe(section.current);
        });

        return () => {
            sectionsRef.forEach(section => {
                if (section.current) observer.unobserve(section.current);
            });
        }
    })
}

export default useObserver