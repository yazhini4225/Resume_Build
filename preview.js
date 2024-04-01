function previewResume() {
    const resumeContent = document.getElementById('resume').innerHTML;
    const resumeContent = encodeURIComponent(document.getElementById('resume').innerHTML);
    const encodedContent = encodeURIComponent(resumeContent);
    window.location.href = 'preview.html?content=' + encodedContent;
    window.open('preview.html?content=' + resumeContent);
}