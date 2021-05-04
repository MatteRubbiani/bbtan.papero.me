import Phaser from "phaser";

const config = (scene, parent, width, height, scaleMode=0, defaultPhysics = "arcade") => {
    return {
        type: Phaser.AUTO,
        physics: {
            default: defaultPhysics,
            arcade: {
                debug: false
            },
            matter: {
                debug: false
            }
        },
        canvasStyle: "border: 2px solid white; background-color: none;",
        parent,
        width,
        height,
        scene,
        scaleMode
    }
}

const phaser = {
    width: 800,
    height: 1000,
    blockWidth: 100,
    blockHeight: 100,
    bulletSpeed: 1000
}


const baseUrl = "https://papero.me";
const urls = {
    baseUrl: "https://papero.me",
    getLoginInfoUrl: baseUrl+"/user/get_info",
    createLocalAccountUrl: baseUrl+"/auth/local",
    logoutUrl: baseUrl+"/auth/logout",
    game: baseUrl+"/server/bbtan/game"
}

const colors = [
    0x63b598, 0xce7d78, 0xea9e70, 0xa48a9e, 0xc6e1e8, 0x648177,
    0x1c0365, 0x14a9ad, 0x4ca2f9, 0xa4e43f, 0xd298e2, 0x6119d0,
    0xd2737d, 0xc0a43c, 0xf2510e, 0x651be6, 0x79806e, 0x61da5e, 0xcd2f00, 
    0x9348af, 0x01ac53, 0xc5a4fb, 0x996635,0xb11573, 0x4bb473,
    0x2f3f94, 0x2f7b99, 0xda967d, 0x34891f, 0xb0d87b, 0xca4751, 0x7e50a8, 
    0xc4d647, 0xe0eeb8, 0x11dec1, 0x289812, 0x566ca0, 0xffdbe1, 0x2f1179, 
    0x935b6d, 0x916988, 0x513d98, 0xaead3a, 0x9e6d71, 0x4b5bdc, 0x0cd36d,
    0x250662, 0xcb5bea, 0x228916, 0xac3e1b, 0xdf514a, 0x539397, 0x880977,
    0xf697c1, 0xba96ce, 0x679c9d, 0xc6c42c, 0x5d2c52, 0x48b41b, 0xe1cf3b,
    0x5be4f0, 0x57c4d8, 0xa4d17a, 0x225b8, 0xbe608b, 0x96b00c, 0x088baf,
    0xf158bf, 0xe145ba, 0xee91e3, 0x05d371, 0x5426e0, 0x4834d0, 0x802234,
    0x6749e8, 0x0971f0, 0x8fb413, 0xb2b4f0, 0xc3c89d, 0xc9a941, 0x41d158,
    0xfb21a3, 0x51aed9, 0x5bb32d, 0x807fb, 0x21538e, 0x89d534, 0xd36647,
    0x7fb411, 0x0023b8, 0x3b8c2a, 0x986b53, 0xf50422, 0x983f7a, 0xea24a3,
    0x79352c, 0x521250, 0xc79ed2, 0xd6dd92, 0xe33e52, 0xb2be57, 0xfa06ec,
    0x1bb699, 0x6b2e5f, 0x64820f, 0x1c271, 0x21538e, 0x89d534, 0xd36647,
    0x7fb411, 0x0023b8, 0x3b8c2a, 0x986b53, 0xf50422, 0x983f7a, 0xea24a3,
    0x79352c, 0x521250, 0xc79ed2, 0xd6dd92, 0xe33e52, 0xb2be57, 0xfa06ec,
    0x1bb699, 0x6b2e5f, 0x64820f, 0x1c271, 0x9cb64a, 0x996c48, 0x9ab9b7,
    0x06e052, 0xe3a481, 0x0eb621, 0xfc458e, 0xb2db15, 0xaa226d, 0x792ed8,
    0x73872a, 0x520d3a, 0xcefcb8, 0xa5b3d9, 0x7d1d85, 0xc4fd57, 0xf1ae16,
    0x8fe22a, 0xef6e3c, 0x243eeb, 0x1dc18, 0xdd93fd, 0x3f8473, 0xe7dbce,
    0x421f79, 0x7a3d93, 0x635f6d, 0x93f2d7, 0x9b5c2a, 0x15b9ee, 0x0f5997,
    0x409188, 0x911e20, 0x1350ce, 0x10e5b1, 0xfff4d7, 0xcb2582, 0xce00be,
    0x32d5d6, 0x17232, 0x608572, 0xc79bc2, 0x00f87c, 0x77772a, 0x6995ba,
    0xfc6b57, 0xf07815, 0x8fd883, 0x060e27, 0x96e591, 0x21d52e, 0xd00043,
    0xb47162, 0x1ec227, 0x4f0f6f, 0x1d1d58, 0x947002, 0xbde052, 0xe08c56,
    0x28fcfd, 0xbb09b, 0x36486a, 0xd02e29, 0x1ae6db, 0x3e464c, 0xa84a8f,
    0x911e7e, 0x3f16d9, 0x0f525f, 0xac7c0a, 0xb4c086, 0xc9d730, 0x30cc49,
    0x3d6751, 0xfb4c03, 0x640fc1, 0x62c03e, 0xd3493a, 0x88aa0b, 0x406df9,
    0x615af0, 0x4be47, 0x2a3434, 0x4a543f, 0x79bca0, 0xa8b8d4, 0x00efd4,
    0x7ad236, 0x7260d8, 0x1deaa7, 0x06f43a, 0x823c59, 0xe3d94c, 0xdc1c06,
    0xf53b2a, 0xb46238, 0x2dfff6, 0xa82b89, 0x1a8011, 0x436a9f, 0x1a806a,
    0x4cf09d, 0xc188a2, 0x67eb4b, 0xb308d3, 0xfc7e41, 0xaf3101, 0xff065,
    0x71b1f4, 0xa2f8a5, 0xe23dd0, 0xd3486d, 0x00f7f9, 0x474893, 0x3cec35,
    0x1c65cb, 0x5d1d0c, 0x2d7d2a, 0xff3420, 0x5cdd87, 0xa259a4, 0xe4ac44,
    0x1bede6, 0x8798a4, 0xd7790f, 0xb2c24f, 0xde73c2, 0xd70a9c, 0x25b67,
    0x88e9b8, 0xc2b0e2, 0x86e98f, 0xae90e2, 0x1a806b, 0x436a9e, 0x0ec0ff,
    0xf812b3, 0xb17fc9, 0x8d6c2f, 0xd3277a, 0x2ca1ae, 0x9685eb, 0x8a96c6,
    0xdba2e6, 0x76fc1b, 0x608fa4, 0x20f6ba, 0x07d7f6, 0xdce77a, 0x77ecca]
/*
colors: [
    "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
    "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
    "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
    "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
    "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
    "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
    "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
    "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
    "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
    "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
    "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
    "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
    "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
    "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
    "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
    "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
    "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
    "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
    "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
    "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
    "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
    "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
    "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
    "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
    "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
    "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
    "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
    "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
    "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
    "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
    "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
    "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
    "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
    "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
    "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
    "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"]
*/
function createGame(){
    let blocks = []
    for (let i=0; i < 4; i++){
        let n = parseInt(Math.random() * 8)
        if (!blocks[n]) {
            blocks[n] = {
                x: n,
                y: 1,
                left: 1,
                start: 1
            }
        }else{
            i--
        }
    }
    let cleanBlocks = []
    blocks.forEach(b => {
        if (b) cleanBlocks.push(b)
    })
    return {
        level: 1,
        spritePosition: 3 * phaser.blockWidth,
        blocks: cleanBlocks
    }
}



export {config, phaser, urls, colors, createGame}
