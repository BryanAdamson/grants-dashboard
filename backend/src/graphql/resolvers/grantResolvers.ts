import { getGrants, getGrantById, createGrant, updateGrant, deleteGrant } from '../../services/grantService';
import { IGrant } from '../../models/Grant';

export const grantResolvers = {
    Query: {
        getGrants: async () => await getGrants(),
        getGrant: async (_: unknown, { id }: { id: string }) => await getGrantById(id),
    },
    Mutation: {
        createGrant: async (_: unknown, { grantInput }: { grantInput: Partial<IGrant> }) => await createGrant(grantInput),
        updateGrant: async (_: unknown, { id, grantInput }: { id: string, grantInput: Partial<IGrant> }) => await updateGrant(id, grantInput),
        deleteGrant: async (_: unknown, { id }: { id: string }) => await deleteGrant(id),
        submitFeedback: async (_: unknown, { id, feedback, status }: { id: string; feedback: string; status: "Applied" | "Rejected" | "Accepted" }) => {
            const grant = await getGrantById(id);
            if (!grant) {
                throw new Error('Grant not found');
            }

            grant.feedback = feedback;
            grant.status = status;

            await updateGrant(id, grant);

            return grant;
        },
    },
};