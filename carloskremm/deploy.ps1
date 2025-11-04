$ErrorActionPreference = "Stop"

$imageName = "timkeutel/carloskremm-landingpage:dev"

$project = "CarlosFotografie"
$piBasePath = "/home/temp"

ssh pi "mkdir $piBasePath"
ssh pi "cd $piBasePath && rm -r $project"
ssh pi "cd $piBasePath && git clone https://github.com/TimKeutelWebServices/CarlosFotografie.git"
ssh pi "cd $piBasePath/$project/carloskremm && docker buildx build ../ -f ./Dockerfile -t $imageName"

<#

#docker buildx build ../ -f ./Dockerfile --platform linux/arm64/v8 -t $imageName --output=type=registry
#docker image push $imageName
#



ssh pi 'docker compose pull'
ssh pi 'docker compose up -d --no-deps'

# Load environment variables from .env file
if (Test-Path ".env") {
	Get-Content ".env" | ForEach-Object {
		if ($_ -match "^\s*([^#][^=]+)=(.*)$") {
			$key = $matches[1].Trim()
			$value = $matches[2].Trim()
			# Remove quotes if present
			if ($value -match '^"(.*)"$' -or $value -match "^'(.*)'$") {
				$value = $matches[1]
			}
			[Environment]::SetEnvironmentVariable($key, $value, "Process")
		}
	}
	Write-Host "Environment variables loaded from .env file"
} else {
	Write-Host "No .env file found" -ForegroundColor Yellow
}

$uri = "https://api.cloudflare.com/client/v4/zones/$Env:CLOUDFLARE_ZONE_ID/purge_cache";

Write-Host "$Env:CLOUDFLARE_EMAIL"

$params = @{
  Uri         = $uri
  Method      = 'POST'
  ContentType = 'application/json'
  Headers     = @{'X-Auth-Email' = "$Env:CLOUDFLARE_EMAIL"; 'X-Auth-Key' = "$Env:CLOUDFLARE_API_KEY"}
  Body        = @{
    hosts = @("dev.carloskremm.de", "carloskremm.de")
  } | ConvertTo-Json
}

$response = Invoke-WebRequest @params 

# Prime the cache by sending a request to the homepage
Start-Sleep -Seconds 30

$baseUrl = "https://dev.carloskremm.de"
Invoke-WebRequest -Uri "$baseUrl" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/contact" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/portrait" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/business" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/cars" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/couple" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/family" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/location" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/pets" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/portrait" | Out-Null
Invoke-WebRequest -Uri "$baseUrl/gallery/video" | Out-Null #>