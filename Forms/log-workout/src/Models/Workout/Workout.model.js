import uniqId from 'uniqid';

export default class WorkoutModel {

    constructor(data, distance) {
        this.data = data;
        this.distance = distance;
        this.id = uniqId();

    }
}