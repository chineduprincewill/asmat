export const getYears = (start, end) => {
    let years = [];

    for (let i = start; i <= end; i++){
        years.push(i)
    }

    return years;
}

export const formatErrors = (str) => {
    let chars = ['-', '_', '!', '*', '{', '}', ':', '"', '[', ']', '\\'];
    let escapedChars = chars.map(char => char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    let regex = new RegExp(escapedChars.join('|'), 'g');
    return str.replace(regex, '');
}

export const getConditionLabel = (code) => {
    const conditions = [
        { code: '1', label: 'Excellent' },
        { code: '4', label: 'Usable' },
        { code: '7', label: 'Repairable' },
        { code: 'X', label: 'Salvage' },
        { code: 'S', label: 'Scrap' }
    ];

    const condition = conditions.find(cnd => cnd.code === String(code));
    return condition ? condition.label : code; // Return original code if not found
}

export const statusColor = (stat) => {
    switch(stat) {
        case 'Pending':
            return 'text-orange-500';
        case 'Processing':
            return 'text-green-500';
        case 'Completed':
            return 'text-accent';
        default:
            return 'text-orange-500';
    }
}

export const compareJsonAndGetDifferences = (obj1, obj2) => {
    const differences = {};
    obj1 = JSON.parse(obj1);
    obj2 = JSON.parse(obj2);
    
    // Get all keys from both objects
    const allKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
    
    // Find common keys
    const commonKeys = allKeys.filter(key => 
        obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)
    );
    
    // Compare common keys
    commonKeys.forEach(key => {
        // Handle nested objects recursively
        if (typeof obj1[key] === 'object' && obj1[key] !== null && 
            typeof obj2[key] === 'object' && obj2[key] !== null) {
            
            const nestedDiff = compareJsonAndGetDifferences(obj1[key], obj2[key]);
            if (Object.keys(nestedDiff).length > 0) {
                differences[key] = {
                    old: obj1[key],
                    new: obj2[key]
                };
            }
        } 
        // Compare primitive values
        else if (obj1[key] !== obj2[key]) {
            differences[key] = {
                old: obj1[key],
                new: obj2[key]
            };
        }
    });
    
    return differences;
}