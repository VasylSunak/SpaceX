export const filterShipments = (shipments, searchParam) => 
    shipments.filter(shipment => shipment.name.toLowerCase().includes(searchParam.toLowerCase()));

export const getNumberOfCargoBays = (value) => {

    if (!value) return 0;

    let cargoBoxes = value.split(',').map(cargoBox => +cargoBox);

    const isCargoBoxesNotValid = 
        !validateCargoBoxes(cargoBoxes) || 
        (cargoBoxes.length === 0 || cargoBoxes[0] === 0);

    if (isCargoBoxesNotValid) return 0;

    return calculateNumberOfCargoBays(cargoBoxes);
}

const calculateNumberOfCargoBays = (cargoBoxes) => {
    let cargoBays = 1;
    let cargoBoxesSum = 0;

    while (cargoBoxes.length) {
        const cargoBoxMin = Math.min(...cargoBoxes);
  
        if (cargoBoxesSum + cargoBoxMin <= 10) {
          cargoBoxesSum = cargoBoxesSum + cargoBoxMin;
          const cargoBoxMinIndex = cargoBoxes.findIndex(cargoBox => cargoBox === cargoBoxMin);
          cargoBoxes.splice(cargoBoxMinIndex, 1);
        } else {
          cargoBays++;
          cargoBoxesSum = 0;
        }
    }

    return cargoBays;
}

const validateCargoBoxes = (boxes) => {
    for (let i = 0; i < boxes.length; i++) {
        if (isNaN(boxes[i]) || boxes[i] > 10) {
            return false;
        }
    }

    return boxes;
}