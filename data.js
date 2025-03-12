// Animal cycle (12-year)
const animals = [
    "Rat", "Ox", "Tiger", "Rabbit", 
    "Dragon", "Snake", "Horse", "Sheep", 
    "Monkey", "Bird", "Dog", "Pig"
];

// Element cycle (5 elements)
const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

// Animal emojis
const animalEmojis = {
    "Rat": "🐀", 
    "Ox": "🐂", 
    "Tiger": "🐯", 
    "Rabbit": "🐇", 
    "Dragon": "🐉", 
    "Snake": "🐍", 
    "Horse": "🐴", 
    "Sheep": "🐑", 
    "Monkey": "🐒", 
    "Bird": "🐓", 
    "Dog": "🐕", 
    "Pig": "🐖"
};

// Simplified astrological data with just the summaries
const animalData = {
    "Rat": {
        summary: "As a Rat, you are quick-witted and intelligent, with great charm and adaptability. You excel at accumulating and preserving wealth. You are also very imaginative and have a curious mind, always interested in discovering new things. However, sometimes your shrewdness can come across as cunning or selfishness. Your social nature can hide an introverted side that occasionally needs solitude to recharge."
    },
    "Ox": {
        summary: "As an Ox, you embody strength, reliability, and determination. Your methodical approach to life ensures steady progress toward your goals. You value honesty and expect the same from others. Your patience and diligence are remarkable, allowing you to accomplish tasks that others might abandon. However, your steadfastness can sometimes manifest as stubbornness, and you may benefit from being more open to alternative perspectives. Your loyalty makes you a trusted friend and valuable community member."
    },
    "Tiger": {
        summary: "As a Tiger, you possess natural leadership qualities, combining courage with charisma. Your passionate nature drives you to pursue your goals with intensity and determination. You have a strong sense of justice and often stand up for others. While your confidence is inspiring, your impulsive tendencies may lead to unnecessary risks. Your generosity wins you many admirers, though your emotional intensity can sometimes be overwhelming for more reserved individuals. Your dynamic energy and protective instincts make you a powerful ally."
    },
    "Rabbit": {
        summary: "As a Rabbit, your gentle and compassionate nature makes you beloved by many. You have a refined aesthetic sense and often create harmony in your surroundings. Your diplomatic skills help you navigate social situations with grace, and you're adept at avoiding unnecessary conflicts. While your caution protects you from many troubles, it may sometimes hold you back from valuable opportunities. Your sensitivity allows you to understand others deeply, though it can also leave you vulnerable to emotional wounds. Your kindness and consideration create a peaceful atmosphere wherever you go."
    },
    "Dragon": {
        summary: "As a Dragon, you possess a magnetic charisma that naturally draws others to you. Your visionary thinking and ambitious nature propel you toward remarkable achievements. You have natural leadership abilities and often inspire others with your energy and confidence. While your powerful presence can be commanding, be mindful that it doesn't become domineering. Your high standards drive excellence but may create stress when applied too rigidly to yourself or others. Your innovative thinking and courage in facing challenges make you a transformative force in any situation."
    },
    "Snake": {
        summary: "As a Snake, your wisdom and intuition give you profound insights that others might miss. You possess natural elegance and a thoughtful approach to life that leads to well-considered decisions. Your organizational skills help you create order from chaos, and your philosophical nature gives you a unique perspective on life's challenges. While your cautious nature serves you well, it can sometimes manifest as suspicion or secretiveness. Your determination allows you to persist when others might give up. Your rich inner life and observant nature make you both an intriguing companion and a valuable advisor."
    },
    "Horse": {
        summary: "As a Horse, your energetic and adventurous spirit keeps you constantly moving forward. Your versatility allows you to excel in various environments, while your cheerful nature makes you a welcome presence in social gatherings. Your independence is one of your greatest strengths, though it sometimes leads you to resist necessary constraints. Your persuasive abilities help you rally others to your cause, but be mindful that your enthusiasm doesn't override others' needs. Your zest for life and willingness to embrace new experiences make your journey a particularly rich and vibrant one."
    },
    "Sheep": {
        summary: "As a Sheep, your creative and empathetic nature allows you to understand the world through a compassionate lens. Your artistic abilities help you express complex emotions and ideas in beautiful forms. Your calm presence soothes those around you, making you a valued friend in times of stress. While your adaptability helps you navigate changing circumstances, be careful not to become too passive in determining your own path. Your gentle approach to conflict resolution creates harmony, though standing firm when necessary will strengthen your impact. Your nurturing spirit and intuitive understanding of others' needs make you a deeply appreciated presence."
    },
    "Monkey": {
        summary: "As a Monkey, your remarkable cleverness and innovative thinking allow you to solve problems that baffle others. Your versatility and adaptability enable you to thrive in diverse situations. Your curious nature keeps you constantly learning and growing, while your entertaining personality makes you the life of many gatherings. While your quick wit is an asset, be mindful that your humor doesn't become sarcastic or hurtful. Your energy and enthusiasm are contagious, though you may need to practice patience with more methodical processes. Your resourcefulness and creative problem-solving make you an invaluable team member and friend."
    },
    "Bird": {
        summary: "As a Bird (Rooster), your keen observational skills and practical approach help you excel in complex situations. Your organizational abilities create efficiency in both your life and the lives of those around you. Your confidence and honesty make you a trusted advisor, while your hardworking nature ensures consistent progress toward your goals. While your high standards drive excellence, be cautious that your perfectionism doesn't lead to unnecessary criticism of yourself or others. Your reliability and punctuality make you a valued colleague and friend. Your commitment to truth and integrity creates a foundation of trust in all your relationships."
    },
    "Dog": {
        summary: "As a Dog, your loyalty and honesty form the cornerstone of your character. Your responsible nature makes you someone others can depend on, while your courage allows you to stand firm in challenging situations. Your protective instincts extend to all those you care about, creating a circle of security around your loved ones. While your strong sense of justice is admirable, be mindful that it doesn't become rigid judgment. Your straightforward communication style creates clarity, though sometimes more diplomacy may be beneficial. Your unwavering principles and dedication to those you love make you an invaluable friend and ally."
    },
    "Pig": {
        summary: "As a Pig, your compassionate heart and generous spirit create warmth in your relationships. Your honesty and sincerity build trust, while your patience allows processes to unfold naturally. Your optimistic outlook brings light to even difficult situations. While your trusting nature is beautiful, be aware that some may take advantage of your openness. Your appreciation for comfort and quality enriches your life, though balance is important to avoid excess. Your forgiving nature and willingness to see the best in others create a positive atmosphere around you. Your genuine kindness and sincere interest in others' well-being make you a cherished friend."
    }
};

// Tibetan Losar dates with element-animal combinations from 1927-2046
const losarDates = {
    1927: { date: new Date("1927-03-04"), element: "Fire", animal: "Rabbit" },
    1928: { date: new Date("1928-02-22"), element: "Earth", animal: "Dragon" },
    1929: { date: new Date("1929-02-10"), element: "Earth", animal: "Snake" },
    1930: { date: new Date("1930-03-01"), element: "Iron", animal: "Horse" },
    1931: { date: new Date("1931-02-18"), element: "Iron", animal: "Sheep" },
    1932: { date: new Date("1932-02-07"), element: "Water", animal: "Monkey" },
    1933: { date: new Date("1933-02-25"), element: "Water", animal: "Bird" },
    1934: { date: new Date("1934-02-14"), element: "Wood", animal: "Dog" },
    1935: { date: new Date("1935-02-04"), element: "Wood", animal: "Pig" },
    1936: { date: new Date("1936-02-23"), element: "Fire", animal: "Mouse" },
    1937: { date: new Date("1937-02-12"), element: "Fire", animal: "Ox" },
    1938: { date: new Date("1938-03-03"), element: "Earth", animal: "Tiger" },
    1939: { date: new Date("1939-02-20"), element: "Earth", animal: "Rabbit" },
    1940: { date: new Date("1940-02-09"), element: "Iron", animal: "Dragon" },
    1941: { date: new Date("1941-02-26"), element: "Iron", animal: "Snake" },
    1942: { date: new Date("1942-02-16"), element: "Water", animal: "Horse" },
    1943: { date: new Date("1943-02-05"), element: "Water", animal: "Sheep" },
    1944: { date: new Date("1944-02-24"), element: "Wood", animal: "Monkey" },
    1945: { date: new Date("1945-02-13"), element: "Wood", animal: "Bird" },
    1946: { date: new Date("1946-03-04"), element: "Fire", animal: "Dog" },
    1947: { date: new Date("1947-02-21"), element: "Fire", animal: "Pig" },
    1948: { date: new Date("1948-02-10"), element: "Earth", animal: "Mouse" },
    1949: { date: new Date("1949-02-28"), element: "Earth", animal: "Ox" },
    1950: { date: new Date("1950-02-17"), element: "Iron", animal: "Tiger" },
    1951: { date: new Date("1951-02-07"), element: "Iron", animal: "Rabbit" },
    1952: { date: new Date("1952-02-26"), element: "Water", animal: "Dragon" },
    1953: { date: new Date("1953-02-14"), element: "Water", animal: "Snake" },
    1954: { date: new Date("1954-02-04"), element: "Wood", animal: "Horse" },
    1955: { date: new Date("1955-02-23"), element: "Wood", animal: "Sheep" },
    1956: { date: new Date("1956-02-12"), element: "Fire", animal: "Monkey" },
    1957: { date: new Date("1957-03-02"), element: "Fire", animal: "Bird" },
    1958: { date: new Date("1958-02-19"), element: "Earth", animal: "Dog" },
    1959: { date: new Date("1959-02-08"), element: "Earth", animal: "Pig" },
    1960: { date: new Date("1960-02-27"), element: "Iron", animal: "Mouse" },
    1961: { date: new Date("1961-02-16"), element: "Iron", animal: "Ox" },
    1962: { date: new Date("1962-02-05"), element: "Water", animal: "Tiger" },
    1963: { date: new Date("1963-02-24"), element: "Water", animal: "Rabbit" },
    1964: { date: new Date("1964-02-14"), element: "Wood", animal: "Dragon" },
    1965: { date: new Date("1965-03-04"), element: "Wood", animal: "Snake" },
    1966: { date: new Date("1966-02-21"), element: "Fire", animal: "Horse" },
    1967: { date: new Date("1967-02-10"), element: "Fire", animal: "Sheep" },
    1968: { date: new Date("1968-02-29"), element: "Earth", animal: "Monkey" },
    1969: { date: new Date("1969-02-17"), element: "Earth", animal: "Bird" },
    1970: { date: new Date("1970-02-07"), element: "Iron", animal: "Dog" },
    1971: { date: new Date("1971-02-26"), element: "Iron", animal: "Pig" },
    1972: { date: new Date("1972-02-15"), element: "Water", animal: "Mouse" },
    1973: { date: new Date("1973-03-05"), element: "Water", animal: "Ox" },
    1974: { date: new Date("1974-02-22"), element: "Wood", animal: "Tiger" },
    1975: { date: new Date("1975-02-11"), element: "Wood", animal: "Rabbit" },
    1976: { date: new Date("1976-03-01"), element: "Fire", animal: "Dragon" },
    1977: { date: new Date("1977-02-19"), element: "Fire", animal: "Snake" },
    1978: { date: new Date("1978-02-08"), element: "Earth", animal: "Horse" },
    1979: { date: new Date("1979-02-27"), element: "Earth", animal: "Sheep" },
    1980: { date: new Date("1980-02-17"), element: "Iron", animal: "Monkey" },
    1981: { date: new Date("1981-02-05"), element: "Iron", animal: "Bird" },
    1982: { date: new Date("1982-02-24"), element: "Water", animal: "Dog" },
    1983: { date: new Date("1983-02-13"), element: "Water", animal: "Pig" },
    1984: { date: new Date("1984-03-03"), element: "Wood", animal: "Mouse" },
    1985: { date: new Date("1985-02-20"), element: "Wood", animal: "Ox" },
    1986: { date: new Date("1986-02-09"), element: "Fire", animal: "Tiger" },
    1987: { date: new Date("1987-02-28"), element: "Fire", animal: "Rabbit" },
    1988: { date: new Date("1988-02-18"), element: "Earth", animal: "Dragon" },
    1989: { date: new Date("1989-02-07"), element: "Earth", animal: "Snake" },
    1990: { date: new Date("1990-02-26"), element: "Iron", animal: "Horse" },
    1991: { date: new Date("1991-02-15"), element: "Iron", animal: "Sheep" },
    1992: { date: new Date("1992-03-05"), element: "Water", animal: "Monkey" },
    1993: { date: new Date("1993-02-22"), element: "Water", animal: "Bird" },
    1994: { date: new Date("1994-02-11"), element: "Wood", animal: "Dog" },
    1995: { date: new Date("1995-03-02"), element: "Wood", animal: "Pig" },
    1996: { date: new Date("1996-02-19"), element: "Fire", animal: "Mouse" },
    1997: { date: new Date("1997-02-08"), element: "Fire", animal: "Ox" },
    1998: { date: new Date("1998-02-27"), element: "Earth", animal: "Tiger" },
    1999: { date: new Date("1999-02-17"), element: "Earth", animal: "Rabbit" },
    2000: { date: new Date("2000-02-06"), element: "Iron", animal: "Dragon" },
    2001: { date: new Date("2001-02-24"), element: "Iron", animal: "Snake" },
    2002: { date: new Date("2002-02-13"), element: "Water", animal: "Horse" },
    2003: { date: new Date("2003-03-03"), element: "Water", animal: "Sheep" },
    2004: { date: new Date("2004-02-21"), element: "Wood", animal: "Monkey" },
    2005: { date: new Date("2005-02-09"), element: "Wood", animal: "Bird" },
    2006: { date: new Date("2006-02-28"), element: "Fire", animal: "Dog" },
    2007: { date: new Date("2007-02-18"), element: "Fire", animal: "Pig" },
    2008: { date: new Date("2008-02-07"), element: "Earth", animal: "Mouse" },
    2009: { date: new Date("2009-02-25"), element: "Earth", animal: "Ox" },
    2010: { date: new Date("2010-02-14"), element: "Iron", animal: "Tiger" },
    2011: { date: new Date("2011-03-05"), element: "Iron", animal: "Rabbit" },
    2012: { date: new Date("2012-02-22"), element: "Water", animal: "Dragon" },
    2013: { date: new Date("2013-02-11"), element: "Water", animal: "Snake" },
    2014: { date: new Date("2014-03-02"), element: "Wood", animal: "Horse" },
    2015: { date: new Date("2015-02-19"), element: "Wood", animal: "Sheep" },
    2016: { date: new Date("2016-02-09"), element: "Fire", animal: "Monkey" },
    2017: { date: new Date("2017-02-27"), element: "Fire", animal: "Bird" },
    2018: { date: new Date("2018-02-16"), element: "Earth", animal: "Dog" },
    2019: { date: new Date("2019-02-05"), element: "Earth", animal: "Pig" },
    2020: { date: new Date("2020-02-24"), element: "Iron", animal: "Mouse" },
    2021: { date: new Date("2021-02-12"), element: "Iron", animal: "Ox" },
    2022: { date: new Date("2022-03-03"), element: "Water", animal: "Tiger" },
    2023: { date: new Date("2023-02-21"), element: "Water", animal: "Rabbit" },
    2024: { date: new Date("2024-02-10"), element: "Wood", animal: "Dragon" },
    2025: { date: new Date("2025-02-28"), element: "Wood", animal: "Snake" },
    2026: { date: new Date("2026-02-18"), element: "Fire", animal: "Horse" },
    2027: { date: new Date("2027-02-07"), element: "Fire", animal: "Sheep" },
    2028: { date: new Date("2028-02-26"), element: "Earth", animal: "Monkey" },
    2029: { date: new Date("2029-02-14"), element: "Earth", animal: "Bird" },
    2030: { date: new Date("2030-03-05"), element: "Iron", animal: "Dog" },
    2031: { date: new Date("2031-02-22"), element: "Iron", animal: "Pig" },
    2032: { date: new Date("2032-02-12"), element: "Water", animal: "Mouse" },
    2033: { date: new Date("2033-02-02"), element: "Water", animal: "Ox" },
    2034: { date: new Date("2034-02-19"), element: "Wood", animal: "Tiger" },
    2035: { date: new Date("2035-02-09"), element: "Wood", animal: "Rabbit" },
    2036: { date: new Date("2036-02-27"), element: "Fire", animal: "Dragon" },
    2037: { date: new Date("2037-02-15"), element: "Fire", animal: "Snake" },
    2038: { date: new Date("2038-03-06"), element: "Earth", animal: "Horse" },
    2039: { date: new Date("2039-02-23"), element: "Earth", animal: "Sheep" },
    2040: { date: new Date("2040-02-13"), element: "Iron", animal: "Monkey" },
    2041: { date: new Date("2041-03-03"), element: "Iron", animal: "Bird" },
    2042: { date: new Date("2042-02-21"), element: "Water", animal: "Dog" },
    2043: { date: new Date("2043-02-10"), element: "Water", animal: "Pig" },
    2044: { date: new Date("2044-02-29"), element: "Wood", animal: "Mouse" },
    2045: { date: new Date("2045-02-17"), element: "Wood", animal: "Ox" },
    2046: { date: new Date("2046-02-06"), element: "Fire", animal: "Tiger" }
};