const BASEURL = "http://localhost:3000/api/";

/* <-------------------- Skills endpoints --------------------> */
const allSkills = "skills/allSkills";

/* <-------------------- Skills URL --------------------> */
export function getAllSkills() {
    return (BASEURL + allSkills)
}

