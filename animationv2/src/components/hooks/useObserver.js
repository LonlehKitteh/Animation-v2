import { useEffect } from 'react'

const useObserver = (sections, links) => {

    useEffect(() => {
        const sectionsRef = sections.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const link = links.current[parseInt(entry.target.id.substring(1))].current;
                if (link && entry.isIntersecting) {
                    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                    link.lastChild.style.setProperty('--randomColor', randomColor);
                    link.lastChild.style.fontWeight = "bold";
                } else{
                    if(link) link.lastChild.removeAttribute("style");
                }
            })
        }, {
            threshold: 0.3,
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