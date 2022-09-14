document.addEventListener('DOMContentLoaded', () => {
    const tawkButton = document.querySelector('.tawk-button');

    tawkButton.addEventListener('click', () => {
        const tawkScript = `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6318d54237898912e967d0c7/1gccg23ic';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `;

        const script = document.createElement('script');
        script.textContent = tawkScript;

        document.body.append(script);
        tawkButton.remove();
    });
});
