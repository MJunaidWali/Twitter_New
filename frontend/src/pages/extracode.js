              {/* <select
                className="inputsf"
                name="month"
                value={formData.created_at}
                onChange={handleInputChange}
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>

              <select
                className="inputsf"
                defaultValue=""
                name="date"
                value={formData.created_at}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
                  Date
                </option>
                {Array.from({ length: 31 }, (_, index) => index + 1).map(
                  (date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  )
                )}
              </select>
              <select
                className="inputsf"
                defaultValue=""
                name="year"
                value={formData.created_at}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
                  Year
                </option>
                {Array.from(
                  { length: 30 },
                  (_, index) => new Date().getFullYear() - index
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select> */}
