const _ships = state => state.ships;
const allGroups = state => _ships(state).allGroups;
const allShips = state => _ships(state).all;
const isLoadingCategories = state => _ships(state).isLoadingCategories;

const shipsByCategoryId = (state, categoryId) =>  {
    const shipIds = allGroups(state).filter(grp => grp.id === categoryId)[0].shipTypes;
    return allShips(state).filter(ship => shipIds.includes(ship.type_id));
};

const shipByTypeId = (state, typeId) =>  {
    var ships = allShips(state).filter(ship => ship.type_id === typeId);

    return ships.length > 0
        ? ships[0]
        : undefined;
};

export {
    _ships,
    allGroups,
    allShips,
    shipsByCategoryId,
    isLoadingCategories
};