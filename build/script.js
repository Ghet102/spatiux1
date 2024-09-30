function calculateEarnings() {
    const tokenAmount = parseFloat(document.getElementById('tokenAmount').value);
    const tokenType = document.getElementById('tokenType').value;
    let dailyXLM = 0;
    let biDailyXLM = 0;
    let rate = 0;

    if (tokenType === 'XELON') {
        // XELON earnings logic (same as before)
        if (tokenAmount >= 1875 && tokenAmount <= 3000) {
            rate = 70;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 3001 && tokenAmount <= 4500) {
            rate = 85;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 4501 && tokenAmount <= 5200) {
            rate = 100;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 5201 && tokenAmount <= 7100) {
            rate = 115;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 7101 && tokenAmount <= 9200) {
            rate = 130;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 9201 && tokenAmount <= 11500) {
            rate = 150;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 11501 && tokenAmount <= 13000) {
            rate = 180;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 13001 && tokenAmount <= 15700) {
            rate = 210;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 15701 && tokenAmount <= 18600) {
            rate = 250;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else if (tokenAmount >= 18601) {
            rate = 300;
            dailyXLM = (tokenAmount * 0.8 * (rate / 100)) / 2;
        } else {
            document.getElementById('result').innerText = "Please enter at least 1,875 XELON tokens.";
            return;
        }

        document.getElementById('result').innerHTML = `XELON Earnings: <b>${dailyXLM.toFixed(2)} XLM Daily</b> (Rate: ${rate}%)`;
    } else if (tokenType === 'TESLA') {
        // TESLA bi-daily earnings logic (same as before)
        if (tokenAmount >= 1.33 && tokenAmount <= 2.66) {
            rate = 65;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 2.67 && tokenAmount <= 5) {
            rate = 90;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 5.01 && tokenAmount <= 8) {
            rate = 95;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 8.01 && tokenAmount <= 15) {
            rate = 110;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 15.01 && tokenAmount <= 25) {
            rate = 120;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 25.01 && tokenAmount <= 50) {
            rate = 135;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 50.01 && tokenAmount <= 100) {
            rate = 150;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 100.01 && tokenAmount <= 200) {
            rate = 170;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 200.01 && tokenAmount <= 300) {
            rate = 200;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else if (tokenAmount >= 300.01) {
            rate = 250;
            biDailyXLM = tokenAmount * 1500 * (rate / 100);
        } else {
            document.getElementById('result').innerText = "Please enter at least 1.33 TESLA tokens.";
            return;
        }

        document.getElementById('result').innerHTML = `TESLA Earnings: <b>${biDailyXLM.toFixed(2)} XLM Bi-Daily</b> (Rate: ${rate}%)`;
    } else if (tokenType === 'xAI') {
        // xAI earnings logic based on tiers (newly added)
        const xaiTiers = [
            {
                min: 1,
                max: 150,
                rates: {
                    xai: 3.5,
                    tesla: 6,
                    xelon: 4
                }
            },
            {
                min: 151,
                max: 600,
                rates: {
                    xai: 5.2,
                    tesla: 9,
                    xelon: 6,
                    tbc: 4.5
                }
            },
            {
                min: 601,
                max: 1200,
                rates: {
                    xai: 8,
                    tesla: 13,
                    xelon: 12,
                    tbc: 7,
                    nlink: 2
                }
            },
            {
                min: 1201,
                max: 6000,
                rates: {
                    xai: 10.5,
                    tesla: 22,
                    xelon: 17,
                    tbc: 9,
                    nlink: 3,
                    x: 0.07
                }
            },
            {
                min: 6001,
                max: 12000,
                rates: {
                    xai: 16,
                    tesla: 42,
                    xelon: 35,
                    tbc: 12,
                    nlink: 6,
                    x: 0.25,
                    starlink: 2.5
                }
            },
            {
                min: 12001,
                max: 28000,
                rates: {
                    xai: 28,
                    tesla: 65,
                    xelon: 52,
                    tbc: 22,
                    nlink: 12,
                    x: 0.7,
                    starlink: 5,
                    hyper: 6
                }
            },
            {
                min: 28001,
                max: 60000,
                rates: {
                    xai: 55,
                    tesla: 105,
                    xelon: 90,
                    tbc: 32,
                    nlink: 18,
                    x: 1.2,
                    starlink: 7,
                    hyper: 9
                }
            },
            {
                min: 60001,
                max: 120000,
                rates: {
                    xai: 110,
                    tesla: 215,
                    xelon: 150,
                    tbc: 55,
                    nlink: 25,
                    x: 2.5,
                    starlink: 10,
                    hyper: 12
                }
            },
            {
                min: 120001,
                max: 300000,
                rates: {
                    xai: 370,
                    tesla: 515,
                    xelon: 220,
                    tbc: 115,
                    nlink: 35,
                    x: 5.5,
                    starlink: 15,
                    hyper: 18
                }
            },
            {
                min: 300001,
                max: Infinity,
                rates: {
                    xai: 1050,
                    tesla: 2100,
                    xelon: 275,
                    tbc: 320,
                    nlink: 50,
                    x: 7,
                    starlink: 25,
                    hyper: 30
                }
            }
        ];

        const tokenDisplayNames = {
            xai: '🤖 xAI',
            tesla: '🚗 TESLA',
            xelon: '🚀 XELON',
            tbc: '⚙️ TBC',
            nlink: '🧠 NLINK',
            x: '✖ X',
            starlink: '⭐ STARLINK',
            hyper: '🆎 HYPER'
        };
        
        let tier = xaiTiers.find(t => tokenAmount >= t.min && tokenAmount <= t.max);
        if (!tier) {
            document.getElementById('result').innerText = "Please enter at least 1 xAI token.";
            document.getElementById('result').classList.add('show');
            return;
        }
        
        let earnings = {};
        for (let token in tier.rates) {
            let rate = tier.rates[token];
            earnings[token] = tokenAmount * (rate / 100);
        }

        // Build the result string
        let resultHTML = '<h2>Earnings Breakdown:</h2>';
        for (let token in earnings) {
            let tokenDisplayName = tokenDisplayNames[token] || token.toUpperCase();
            resultHTML += `<p>${tokenDisplayName}: <b>${earnings[token].toFixed(2)} Daily</b> (Rate: ${tier.rates[token]}%)</p>`;
        }
        document.getElementById('result').innerHTML = resultHTML;
        document.getElementById('result').classList.add('show');
    } else {
        document.getElementById('result').innerText = "Please select a valid token type.";
        document.getElementById('result').classList.add('show');
    }
}