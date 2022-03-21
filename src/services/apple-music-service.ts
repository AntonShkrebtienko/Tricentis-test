export function getList(param: string) {
    return fetch(`https://itunes.apple.com/search?term=${param}&enitity=album`)
      .then(data => data.json())
}