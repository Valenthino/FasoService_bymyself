// Services data organized by category
export const serviceCategories = {
  emploi: {
    title: "Emploi et Formation Professionnelle",
    services: [
      {
        title: "Agrément de Bureau Privé de Placement",
        description: "Obtention d'agrément pour les bureaux de placement et entreprises de travail temporaire",
        procedure: ["Dépôt du dossier", "Étude de la demande", "Délivrance de l'agrément"]
      },
      {
        title: "Demande d'Attestation de Travail",
        description: "Obtention d'une attestation de travail officielle",
        procedure: ["Formulaire de demande", "Vérification des informations", "Délivrance de l'attestation"]
      },
      {
        title: "Carte de Travail",
        description: "Demande de carte de travail pour les employés",
        procedure: ["Dépôt du dossier complet", "Vérification des documents", "Émission de la carte"]
      },
      {
        title: "Dispense du SND",
        description: "Demande de dispense du Service National pour le Développement",
        procedure: ["Soumission de la demande", "Examen du dossier", "Décision de dispense"]
      }
    ]
  },
  eau: {
    title: "Eau et Assainissement",
    services: [
      {
        title: "Agrément technique dans le domaine de l'eau",
        description: "Autorisation pour les activités liées au secteur de l'eau",
        procedure: ["Dépôt du dossier technique", "Évaluation des capacités", "Délivrance de l'agrément"]
      }
    ]
  },
  tic: {
    title: "Technologies de l'Information",
    services: [
      {
        title: "Agrément Technique en Informatique",
        description: "Certification pour les entreprises du secteur informatique",
        procedure: ["Soumission du dossier", "Évaluation technique", "Attribution de l'agrément"]
      }
    ]
  },
  education: {
    title: "Éducation et Recherche",
    services: [
      {
        title: "Authentification des diplômes",
        description: "Vérification et authentification des diplômes et attestations",
        procedure: ["Dépôt des documents", "Vérification d'authenticité", "Délivrance de l'attestation"]
      },
      {
        title: "Autorisation d'Enseigner",
        description: "Autorisation pour enseigner au post-primaire et secondaire",
        procedure: ["Dépôt du dossier", "Vérification des qualifications", "Octroi de l'autorisation"]
      }
    ]
  },
  commerce: {
    title: "Commerce et Artisanat",
    services: [
      {
        title: "Autorisation d'Exercer le Commerce (AEC)",
        description: "Permis pour exercer une activité commerciale",
        procedure: ["Constitution du dossier", "Étude de la demande", "Délivrance de l'autorisation"]
      },
      {
        title: "Autorisation Spéciale d'Importation",
        description: "Permis pour l'importation de marchandises spécifiques",
        procedure: ["Demande d'autorisation", "Analyse du dossier", "Délivrance de l'ASI"]
      },
      {
        title: "Certificat d'Origine",
        description: "Document attestant l'origine des marchandises",
        procedure: ["Demande de certificat", "Vérification de l'origine", "Émission du certificat"]
      },
      {
        title: "Déclaration Préalable d'Importation",
        description: "Document requis avant toute importation",
        procedure: ["Soumission de la déclaration", "Vérification", "Validation"]
      }
    ]
  }
};