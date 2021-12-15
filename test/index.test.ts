import {serializeMember, deserializeMember} from "../index";
import type {Member} from "@treecg/types";
import { DataFactory } from "rdf-data-factory";

describe('serialize-member', () => {

    const factory = new DataFactory();

    const member: Member = {
        id: factory.namedNode("member-id"),
        quads: [
            factory.quad(
                factory.namedNode('1'),
                factory.namedNode('2'),
                factory.namedNode('3'),
            ),
            factory.quad(
                factory.namedNode('4'),
                factory.namedNode('5'),
                factory.namedNode('6'),
            )
        ] 
    }
    
    test('Test serialize method', () => {
        let serializedMember = serializeMember(member);
        expect(serializedMember).toBeInstanceOf(Object);
        console.log(serializedMember);
    });

    
    test('Test deserialize method', () => {
        let serializedMember = serializeMember(member);
        let deserializedMember = deserializeMember(serializedMember);
        expect(deserializedMember).toBeDefined();
    });
    

    test('Test serialize & deserialise method', () => {
        let serializedMember = serializeMember(member);
        let deserializedMember = deserializeMember(serializedMember);
        expect(deserializedMember).toEqual(member);
    });

});