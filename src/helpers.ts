export class IdProvider {
	id = 0;

	getNext() {
		this.id = this.id + 1;
		return this.id;
	}
}
