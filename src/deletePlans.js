function deletePlans() {
    this.parentElement.remove();

    console.log(`plans-${this.id.slice(0, -14)}`)
    localStorage.removeItem(`plans-${this.id.slice(0, -14)}`)

}