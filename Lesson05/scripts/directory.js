async function getBusinessData() {
    const response = await fetch(url)
    const url = await response.json();
}