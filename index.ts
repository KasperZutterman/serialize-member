import * as RdfString from "rdf-string";
import type { Member } from "@treecg/types";

export function serializeMember(member: Member): object {
    let quads = [];
    for (const quad of member.quads) {
        quads.push(RdfString.quadToStringQuad(quad));
    }
    return {id:member.id, quads:quads};
}

export function deserializeMember(member: object): Member {
    let quads = [];
    for (const quad of member["quads"]) {
        quads.push(RdfString.stringQuadToQuad(quad));
    }
    return {id:member["id"], quads:quads};
}