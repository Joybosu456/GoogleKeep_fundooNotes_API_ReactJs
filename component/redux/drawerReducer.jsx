const initialdrawerState = {
	
	title: "Keep",
	
};

export const drawerReducer = (state = initialdrawerState, action) => {
	console.log(action)
	switch (action.type) {
		case 'notes':
			return {
				...state,
				title : "Notes"
			};
			case 'reminders':
			return {
				...state,
				title : "Reminders"
			};
            case 'edit':
			return {
				...state,
				title : "Edit"
			};
            case 'archive':
			return {
                ...state,
				title : "Archive"
			};
            case 'bin':
			return {
				...state,
				title : "Bin"
			};
		default:
			return state;
	}
};