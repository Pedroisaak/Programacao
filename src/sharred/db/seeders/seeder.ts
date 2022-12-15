class Seeder {
  /**
   * Abstract class can not be constructed.
   * Seeder class should be extended.
   * @abstract
   * @throws {TypeError} when creating an instance of the abstract class.
   * @throws {TypeError} when the run method is not implemented.
   */
  constructor() {
    if (this.constructor === Seeder) {
      throw new TypeError("Can not construct abstract class.");
    }
    if (this.run === Seeder.prototype.run) {
      throw new TypeError("Please implement abstract method run.");
    }
  }

  /**
   * Seed the data.
   * @return {Promise} Stats about the save.
   */
  async seed() {
    await this.beforeRun();

    let results = null;

    if (await this.shouldRun()) {
      results = await this.run();
    }

    return this.getStats(results);
  }

  /**
   * Should run
   * @return {Promise<boolean>} Indication if should run
   * @abstract
   */
  async shouldRun() {
    return true;
  }

  /**
   * To perform before run.
   * @return {Promise}
   * @abstract
   */
  async beforeRun() {}

  /**
   * Run the seeder.
   * @abstract
   */
  async run(): Promise<any> {}

  /**
   * Get stats from seed results.
   * @param  {Array} [results] Seed results.
   * @return {Object}
   * @property {boolean} run      Did the seeder run?
   * @property {number}  created  Amount of records created by the seeder.
   */
  getStats(results: string | void | any[] | null) {
    if (Array.isArray(results)) {
      return { run: true, created: results.length };
    }

    return { run: false, created: 0 };
  }
}

export default Seeder;
