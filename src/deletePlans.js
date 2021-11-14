function deletePlans() {
    this.parentElement.remove();
    localStorage.removeItem(`plans-${this.id.slice(0, -14)}`)

}