import csv

guests = []

with open("constants/wedding-geodata.csv") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
            continue
        else:
            guests.append({
                "name": row[0],
                "attended": False,
                "officiant": False,
                "in_wedding_party": False,
                "groom": False,
                "bride": False,
                "inviter": "Germaine",
                "latitude": row[6],
                "longitude": row[7]
            })

print(guests)
