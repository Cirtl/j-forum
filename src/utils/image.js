const spliter = '!-da2;$lx*ll#a+eb=f[lcz.eh'

const appendImages = (source, list) => {
    let tmp = source.concat(spliter)
    let links = list.map(val => {return val.url}).join(',')
    let res = tmp.concat(links)
    console.log(res)
    return res
}

const extractImages = (source) => {
    let loc = source.indexOf(spliter)
    let real_content = null
    let links = null
    if (loc == -1) {
        real_content = source
        links = []
    } else {
        real_content = source.slice(0, loc)
        links = source.slice(loc+spliter.length, source.length).split(',')
    }
    return {
        real_content,
        links
    }
}

export {
    appendImages,
    extractImages
}