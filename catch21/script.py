import random

def distribuer_carte():
    valeur = random.randint(1, 11)
    return valeur

def afficher_main(main):
    print(f"Votre main: {main} (Total: {sum(main)})")

def catch_21():
    main = [distribuer_carte(), distribuer_carte()]
    afficher_main(main)

    while True:
        choix = input("Voulez-vous une autre carte ? (o/n) ")

        if choix.lower() == "o":
            main.append(distribuer_carte())
            afficher_main(main)

            if sum(main) > 21:
                print("Vous avez dépassé 21. Vous avez perdu.")
                break
            elif sum(main) == 21:
                print("Catch 21! Vous avez gagné!")
                break
        elif choix.lower() == "n":
            print(f"Vous avez terminé avec {sum(main)} points.")
            break
        else:
            print("Choix invalide. Veuillez répondre par 'o' ou 'n'.")

if __name__ == "__main__":
    catch_21()
