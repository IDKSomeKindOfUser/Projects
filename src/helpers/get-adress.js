export async function getAdress(ip = '8.8.8.8'){
    const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_V7UAOsYOeifz1p5VMr36wKyjfzEPI&ipAddress=${ip}`
      )
    return await response.json()
}