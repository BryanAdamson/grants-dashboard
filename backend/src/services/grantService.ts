import Grant, { IGrant } from '../models/Grant';

export const getGrants = async (): Promise<IGrant[]> => {
    return Grant.find();
};

export const getGrantById = async (id: string): Promise<IGrant | null> => {
    return Grant.findById(id);
};

export const createGrant = async (grantData: Partial<IGrant>): Promise<IGrant> => {
    const grant = new Grant(grantData);
    return await grant.save();
};

export const updateGrant = async (id: string, grantData: Partial<IGrant>): Promise<IGrant | null> => {
    return Grant.findByIdAndUpdate(id, grantData, {new: true});
};

export const deleteGrant = async (id: string): Promise<IGrant | null> => {
    return Grant.findByIdAndDelete(id);
};
