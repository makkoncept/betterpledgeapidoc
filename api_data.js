define({ "api": [
  {
    "type": "get",
    "url": "/beneficiaries",
    "title": "get all beneficiaries",
    "version": "1.0.0",
    "name": "beneficiaries",
    "group": "Beneficiary",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "beneficiaries",
            "description": "<p>Array of beneficiary objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.id",
            "description": "<p>The beneficiary's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "beneficiaries.username",
            "description": "<p>The beneficiary's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "beneficiaries.first_name",
            "description": "<p>The first name of the beneficiary.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "beneficiaries.last_name",
            "description": "<p>The last name of the beneficiary.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.email",
            "description": "<p>email of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.phone_no",
            "description": "<p>phone_no of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.city",
            "description": "<p>city name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.street",
            "description": "<p>street number/name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.landmark",
            "description": "<p>landmark description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiaries.country",
            "description": "<p>country name.</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Beneficiary"
  },
  {
    "type": "get",
    "url": "/beneficiary/orders",
    "title": "get all orders of beneficiary",
    "version": "1.0.0",
    "name": "beneficiaryorders",
    "group": "Beneficiary",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders",
            "description": "<p>array of beneficiary orders</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.donor_id",
            "description": "<p>id of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.listing_id",
            "description": "<p>id of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.beneficiary_id",
            "description": "<p>id of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.street",
            "description": "<p>street number/name of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.landmark",
            "description": "<p>landmark description of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.city",
            "description": "<p>city of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.country",
            "description": "<p>country of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.image",
            "description": "<p>image of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.description",
            "description": "<p>description of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.organisation",
            "description": "<p>organisation of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.time_stamp",
            "description": "<p>time stamp of order placement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Beneficiary"
  },
  {
    "type": "post",
    "url": "/beneficiary",
    "title": "Add a new beneficiary",
    "version": "1.0.0",
    "name": "createbeneficiary",
    "group": "Beneficiary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the Beneficiary.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>the last name of the Beneficiary.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of Beneficiary.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone number of Beneficiary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of Beneficiary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city name(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street number(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>landmark description(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country name(part of address)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>beneficiary added to database</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>beneficiary with that email already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>address street not provided</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[3]",
            "description": "<p>not json</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Beneficiary"
  },
  {
    "type": "post",
    "url": "/donor",
    "title": "Add a new donor",
    "version": "1.0.0",
    "name": "createdonor",
    "group": "Donor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>the last name of the Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone number of Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organisation",
            "description": "<p>organisation of Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city name(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street number(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>landmark description(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country name(part of address)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>donor added to database</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Donor with that email already exists!</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>address street not provided</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[3]",
            "description": "<p>not json</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Donor"
  },
  {
    "type": "get",
    "url": "/donor/orders",
    "title": "get all orders of donor",
    "version": "1.0.0",
    "name": "donororders",
    "group": "Donor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders",
            "description": "<p>array of donor orders</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.donor_id",
            "description": "<p>id of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.listing_id",
            "description": "<p>id of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.beneficiary_id",
            "description": "<p>id of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.first_name",
            "description": "<p>first name of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.last_name",
            "description": "<p>last name of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.email",
            "description": "<p>email of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.username",
            "description": "<p>username of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.phone_no",
            "description": "<p>phone number of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.street",
            "description": "<p>street number/name of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.landmark",
            "description": "<p>landmark description of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.city",
            "description": "<p>city of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.country",
            "description": "<p>country of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.image",
            "description": "<p>image of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.description",
            "description": "<p>description of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.organisation",
            "description": "<p>organisation of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.time_stamp",
            "description": "<p>time stamp of order placement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Donor"
  },
  {
    "type": "get",
    "url": "/donors",
    "title": "get all donors",
    "version": "1.0.0",
    "name": "donors",
    "group": "Donor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "donors",
            "description": "<p>Array of donor objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.id",
            "description": "<p>The donors's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "donors.username",
            "description": "<p>The donors's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "donors.first_name",
            "description": "<p>The first name of the donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "donors.last_name",
            "description": "<p>The last name of the donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.email",
            "description": "<p>email of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.phone_no",
            "description": "<p>phone_no of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.city",
            "description": "<p>city name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.street",
            "description": "<p>street number/name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.landmark",
            "description": "<p>landmark description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.country",
            "description": "<p>country name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donors.organisation",
            "description": "<p>organisation name.</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Donor"
  },
  {
    "type": "post",
    "url": "/deletelisting",
    "title": "delete listing",
    "version": "1.0.0",
    "name": "deletelisting",
    "group": "Listing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "listing_id",
            "description": "<p>listing id (in args)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>listing deleted</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>no listing_id sent in args</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>no listing available with that listing_id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[3]",
            "description": "<p>permission denied</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[4]",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[5]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "get",
    "url": "/donorlistings",
    "title": "get all listings of donor",
    "version": "1.0.0",
    "name": "donorlisting",
    "group": "Listing",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "listings",
            "description": "<p>All listing of donor(Array of Objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "listings.listing_id",
            "description": "<p>id of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "listings.quantity",
            "description": "<p>quantity of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "listings.donor_id",
            "description": "<p>id of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "listings.description",
            "description": "<p>description of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "listings.type",
            "description": "<p>'veg' or 'non-veg'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "listings.image",
            "description": "<p>image url</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "get",
    "url": "/listing",
    "title": "get all listing",
    "version": "1.0.0",
    "name": "listing_get",
    "group": "Listing",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "listing_id",
            "description": "<p>id of the listing.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>listing quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>listing description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'veg' or 'non-veg'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "donor_id",
            "description": "<p>id of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street number/name of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>landmark description of donor address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city name of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country name of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organisation",
            "description": "<p>organisation name of donor</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>send_all not given</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "post",
    "url": "/listing",
    "title": "Add a new listing",
    "version": "1.0.0",
    "name": "listing_post",
    "group": "Listing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the listing</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the listing.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'veg' or 'non veg'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>listing added</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>not json</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[3]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "get",
    "url": "/singlelisting",
    "title": "get single listing",
    "version": "1.0.0",
    "name": "singlelisting",
    "group": "Listing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "listing_id",
            "description": "<p>id of listing(in args)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "listing_id",
            "description": "<p>id of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donor_id",
            "description": "<p>id of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of listing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'veg' or 'non-veg'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street number/name of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>landmark description of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organisation",
            "description": "<p>organisation of donor.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>no listing with that listing id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>no listing available with that listing_id</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "post",
    "url": "/updatelisting",
    "title": "update listing info",
    "version": "1.0.0",
    "name": "updatelisting",
    "group": "Listing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of listing.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of listing.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'veg' or 'non-veg'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>listing updated</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>listing_id not provided</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>no listing available with that listing_id</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "post",
    "url": "/uploadimage",
    "title": "upload image to imgur",
    "version": "1.0.0",
    "name": "uploadimage",
    "group": "Listing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Bytes",
            "optional": false,
            "field": "file",
            "description": "<p>file object.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>image url</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>No file sent</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>No selected file</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Listing"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "get jwt token",
    "version": "1.0.0",
    "name": "Login",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'donor' or 'beneficiary'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "email",
            "description": "<p>email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "password",
            "description": "<p>password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>jwt token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>not json</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/order",
    "title": "get all orders",
    "version": "1.0.0",
    "name": "order_get",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "donor_id",
            "description": "<p>id of donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beneficiary_id",
            "description": "<p>id of beneficiary.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "listing_id",
            "description": "<p>id of listing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time_stamp",
            "description": "<p>time stamp of order palcement.</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order",
    "title": "Add a new order",
    "version": "1.0.0",
    "name": "order_post",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>time stamp of order placement</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "orders",
            "description": "<p>List of orders placed(Array of Objects)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orders.product",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orders.donor_id",
            "description": "<p>donor id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orders.listing_id",
            "description": "<p>listing id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orders.quantity",
            "description": "<p>quantity of order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Your order has been placed.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>not json</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>beneficiary not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[3]",
            "description": "<p>listing quantity less than 0</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[4]",
            "description": "<p>quantity more than stock</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[5]",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[6]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "get details of user",
    "version": "1.0.0",
    "name": "profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'donor' or 'beneficiary'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Object with user info.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.first_name",
            "description": "<p>first name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.last_name",
            "description": "<p>last name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.organisation",
            "description": "<p>organisation of user(only for donor)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.street",
            "description": "<p>street number/name of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.landmark",
            "description": "<p>landmark description of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.city",
            "description": "<p>city of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.country",
            "description": "<p>country of user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "update user",
    "version": "1.0.0",
    "name": "updateuser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'donor' or 'beneficiary'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>the last name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone number of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organisation",
            "description": "<p>organisation of Donor(for donor only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city name(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street number(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landmark",
            "description": "<p>landmark description(part of address)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country name(part of address)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>updated token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>token is missing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message[2]",
            "description": "<p>token is invalid</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "User"
  }
] });
