export class IdProvider {
	private id = 0;

	public getNext() {
		this.id = this.id + 1;
		return this.id;
	}
}
